'use client'

import { useEffect, useState, useRef } from 'react'

interface Stoet {
  id: number
  volgorde: number | null
  naamVereniging: string
  thema: string
  rangschikkingZondag: number | null
  rangschikkingDinsdag: number | null
}

export default function Stoeten() {
  const [stoeten, setStoeten] = useState<Stoet[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const fetchStoeten = async (showLoading = false) => {
    try {
      if (showLoading) {
        setIsRefreshing(true)
      }
      
      // Add cache-busting parameter to ensure fresh data
      const response = await fetch(`/api/stoeten?t=${Date.now()}`, {
        cache: 'no-store',
      })
      
      if (!response.ok) {
        throw new Error('Failed to fetch stoeten data')
      }
      
      const data = await response.json()
      setStoeten(data.stoeten || [])
      setError(null)
    } catch (err) {
      // Only show error on initial load, not on refresh
      if (showLoading) {
        setError(err instanceof Error ? err.message : 'Er is een fout opgetreden')
      }
      console.error('Error fetching stoeten:', err)
    } finally {
      setLoading(false)
      setIsRefreshing(false)
    }
  }

  useEffect(() => {
    // Initial fetch
    fetchStoeten(true)

    // Set up automatic refresh every 30 seconds
    // Only refresh if page is visible (not in background tab)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Refresh immediately when tab becomes visible
        fetchStoeten(false)
        // Then continue with interval
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
        intervalRef.current = setInterval(() => {
          if (document.visibilityState === 'visible') {
            fetchStoeten(false)
          }
        }, 30000) // Refresh every 30 seconds
      }
    }

    // Start interval for automatic refresh
    intervalRef.current = setInterval(() => {
      if (document.visibilityState === 'visible') {
        fetchStoeten(false)
      }
    }, 30000) // Refresh every 30 seconds

    // Listen for visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  // Separate stoeten with and without any rangschikking
  const stoetenMetRangschikking = stoeten.filter(
    s => s.rangschikkingZondag !== null || s.rangschikkingDinsdag !== null
  )
  const stoetenZonderRangschikking = stoeten.filter(
    s => s.rangschikkingZondag === null && s.rangschikkingDinsdag === null
  )

  // Separate stoeten with Zondag rangschikking
  const stoetenMetRangschikkingZondag = stoeten.filter(s => s.rangschikkingZondag !== null)
  const sortedStoetenMetRangschikkingZondag = [...stoetenMetRangschikkingZondag].sort((a, b) => {
    if (a.rangschikkingZondag === null || b.rangschikkingZondag === null) return 0
    return a.rangschikkingZondag - b.rangschikkingZondag
  })

  // Separate stoeten with Dinsdag rangschikking
  const stoetenMetRangschikkingDinsdag = stoeten.filter(s => s.rangschikkingDinsdag !== null)
  const sortedStoetenMetRangschikkingDinsdag = [...stoetenMetRangschikkingDinsdag].sort((a, b) => {
    if (a.rangschikkingDinsdag === null || b.rangschikkingDinsdag === null) return 0
    return a.rangschikkingDinsdag - b.rangschikkingDinsdag
  })

  return (
    <section id="stoeten" className="bg-white flex flex-col items-start px-0 py-16 sm:py-24 md:py-32 relative w-full">
      <div className="flex gap-0 items-start overflow-hidden px-4 sm:px-8 md:px-16 py-0 relative w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-8 md:gap-16 items-start relative w-full">
          {/* Volgorde Stoeten */}
          <div className="flex flex-col gap-8 items-start relative w-full">
            <div className="flex flex-col gap-4 items-start justify-center relative text-black text-center w-full">
              <div className="flex items-center justify-center gap-3 w-full">
                <h2 className="font-display text-fluid-display tracking-[1.92px] uppercase">
                  Volgorde stoeten
                </h2>
                {isRefreshing && (
                  <span className="text-sm text-gray-500 font-body" aria-label="Data wordt ververst">
                    ⟳
                  </span>
                )}
              </div>
            </div>

            {loading ? (
              <div className="w-full text-center py-8">
                <p className="font-body text-fluid-body text-black">Laden...</p>
              </div>
            ) : error ? (
              <div className="w-full text-center py-8">
                <p className="font-body text-fluid-body text-red-600">{error}</p>
              </div>
            ) : stoetenZonderRangschikking.length === 0 && sortedStoetenMetRangschikkingZondag.length === 0 && sortedStoetenMetRangschikkingDinsdag.length === 0 ? (
              <div className="w-full text-center py-8">
                <p className="font-body text-fluid-body text-black">Geen stoeten gevonden.</p>
              </div>
            ) : (
              <>
                {/* Table for stoeten without rangschikking */}
                {stoetenZonderRangschikking.length > 0 && (
                  <div className="w-full overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b-2 border-black">
                          <th className="font-body font-semibold text-left py-4 px-4 text-black text-fluid-body">
                            Volgorde
                          </th>
                          <th className="font-body font-semibold text-left py-4 px-4 text-black text-fluid-body">
                            Naam Vereniging
                          </th>
                          <th className="font-body font-semibold text-left py-4 px-4 text-black text-fluid-body">
                            Thema
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {stoetenZonderRangschikking.map((stoet) => (
                          <tr key={stoet.id} className="border-b border-gray-200 hover:bg-licht-geel transition-colors">
                            <td className="py-4 px-4 text-black font-body text-fluid-body">
                              {stoet.volgorde !== null ? stoet.volgorde : '-'}
                            </td>
                            <td className="py-4 px-4 text-black font-body text-fluid-body">
                              {stoet.naamVereniging}
                            </td>
                            <td className="py-4 px-4 text-black font-body text-fluid-body">
                              {stoet.thema || '-'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Uitslag Rangschikking Stoeten - Zondag */}
                {sortedStoetenMetRangschikkingZondag.length > 0 && (
                  <div className="flex flex-col gap-8 items-start relative w-full mt-8">
                    <div className="flex flex-col gap-4 items-start justify-center relative text-black text-center w-full">
                      <h2 className="font-display text-fluid-display tracking-[1.92px] uppercase w-full">
                        Uitslag rangschikking stoeten - Zondag
                      </h2>
                    </div>
                    <div className="w-full overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b-2 border-black">
                            <th className="font-body font-semibold text-left py-4 px-4 text-black text-fluid-body">
                              Rangschikking
                            </th>
                            <th className="font-body font-semibold text-left py-4 px-4 text-black text-fluid-body">
                              Naam Vereniging
                            </th>
                            <th className="font-body font-semibold text-left py-4 px-4 text-black text-fluid-body">
                              Thema
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {sortedStoetenMetRangschikkingZondag.map((stoet) => (
                            <tr key={stoet.id} className="border-b border-gray-200 hover:bg-licht-geel transition-colors">
                              <td className="py-4 px-4 text-black font-body text-fluid-body">
                                {stoet.rangschikkingZondag !== null ? stoet.rangschikkingZondag : '-'}
                              </td>
                              <td className="py-4 px-4 text-black font-body text-fluid-body">
                                {stoet.naamVereniging}
                              </td>
                              <td className="py-4 px-4 text-black font-body text-fluid-body">
                                {stoet.thema || '-'}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Uitslag Rangschikking Stoeten - Dinsdag */}
                {sortedStoetenMetRangschikkingDinsdag.length > 0 && (
                  <div className="flex flex-col gap-8 items-start relative w-full mt-8">
                    <div className="flex flex-col gap-4 items-start justify-center relative text-black text-center w-full">
                      <h2 className="font-display text-fluid-display tracking-[1.92px] uppercase w-full">
                        Uitslag rangschikking stoeten - Dinsdag
                      </h2>
                    </div>
                    <div className="w-full overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b-2 border-black">
                            <th className="font-body font-semibold text-left py-4 px-4 text-black text-fluid-body">
                              Rangschikking
                            </th>
                            <th className="font-body font-semibold text-left py-4 px-4 text-black text-fluid-body">
                              Naam Vereniging
                            </th>
                            <th className="font-body font-semibold text-left py-4 px-4 text-black text-fluid-body">
                              Thema
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {sortedStoetenMetRangschikkingDinsdag.map((stoet) => (
                            <tr key={stoet.id} className="border-b border-gray-200 hover:bg-licht-geel transition-colors">
                              <td className="py-4 px-4 text-black font-body text-fluid-body">
                                {stoet.rangschikkingDinsdag !== null ? stoet.rangschikkingDinsdag : '-'}
                              </td>
                              <td className="py-4 px-4 text-black font-body text-fluid-body">
                                {stoet.naamVereniging}
                              </td>
                              <td className="py-4 px-4 text-black font-body text-fluid-body">
                                {stoet.thema || '-'}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
