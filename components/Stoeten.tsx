'use client'

import { useEffect, useState } from 'react'

interface Stoet {
  id: number
  volgorde: number | null
  naamVereniging: string
  thema: string
  rangschikking: number | null
}

export default function Stoeten() {
  const [stoeten, setStoeten] = useState<Stoet[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStoeten = async () => {
      try {
        const response = await fetch('/api/stoeten')
        if (!response.ok) {
          throw new Error('Failed to fetch stoeten data')
        }
        const data = await response.json()
        setStoeten(data.stoeten || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Er is een fout opgetreden')
        console.error('Error fetching stoeten:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchStoeten()
  }, [])

  // Separate stoeten with and without rangschikking
  const stoetenMetRangschikking = stoeten.filter(s => s.rangschikking !== null)
  const stoetenZonderRangschikking = stoeten.filter(s => s.rangschikking === null)

  // Sort stoeten with rangschikking by rangschikking
  const sortedStoetenMetRangschikking = [...stoetenMetRangschikking].sort((a, b) => {
    if (a.rangschikking === null || b.rangschikking === null) return 0
    return a.rangschikking - b.rangschikking
  })

  return (
    <section id="stoeten" className="bg-white flex flex-col items-start px-0 py-16 sm:py-24 md:py-32 relative w-full">
      <div className="flex gap-0 items-start overflow-hidden px-4 sm:px-8 md:px-16 py-0 relative w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-8 md:gap-16 items-start relative w-full">
          {/* Volgorde Stoeten */}
          <div className="flex flex-col gap-8 items-start relative w-full">
            <div className="flex flex-col gap-4 items-start justify-center relative text-black text-center w-full">
              <h2 className="font-display text-fluid-display tracking-[1.92px] uppercase w-full">
                Volgorde stoeten
              </h2>
            </div>

            {loading ? (
              <div className="w-full text-center py-8">
                <p className="font-body text-fluid-body text-black">Laden...</p>
              </div>
            ) : error ? (
              <div className="w-full text-center py-8">
                <p className="font-body text-fluid-body text-red-600">{error}</p>
              </div>
            ) : stoetenZonderRangschikking.length === 0 && sortedStoetenMetRangschikking.length === 0 ? (
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

                {/* Uitslag Rangschikking Stoeten */}
                {sortedStoetenMetRangschikking.length > 0 && (
                  <div className="flex flex-col gap-8 items-start relative w-full mt-8">
                    <div className="flex flex-col gap-4 items-start justify-center relative text-black text-center w-full">
                      <h2 className="font-display text-fluid-display tracking-[1.92px] uppercase w-full">
                        Uitslag rangschikking stoeten
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
                          {sortedStoetenMetRangschikking.map((stoet) => (
                            <tr key={stoet.id} className="border-b border-gray-200 hover:bg-licht-geel transition-colors">
                              <td className="py-4 px-4 text-black font-body text-fluid-body">
                                {stoet.rangschikking !== null ? stoet.rangschikking : '-'}
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
