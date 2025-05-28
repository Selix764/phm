"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageHero } from "@/components/page-hero"

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState("terms")

  return (
    <>
      <PageHero
        title="Informații"
        subtitle="Legale"
        description="Aici găsiți toate informațiile legale despre serviciile noastre, inclusiv termenii și condițiile, politica de cookies și politica de confidențialitate."
        showCta={false}
      />

      <div className="py-16 px-5 md:px-[120px] max-w-[1400px] mx-auto bg-black">
        <div className="bg-[#1A1A1A] rounded-xl p-8 md:p-12 border border-white/10">
          <Tabs defaultValue="terms" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 bg-black/20">
              <TabsTrigger value="terms" className="text-base">
                Termeni și Condiții
              </TabsTrigger>
              <TabsTrigger value="cookies" className="text-base">
                Politica de Cookies
              </TabsTrigger>
              <TabsTrigger value="privacy" className="text-base">
                Politica de Confidențialitate
              </TabsTrigger>
            </TabsList>

            <TabsContent value="terms" className="text-white/80 space-y-6">
              <h1 className="text-3xl font-bold text-white mb-6">Termeni și Condiții</h1>
              <p className="text-lg text-white/90 italic mb-6">(Ghilino Prod – Servicii Foto & Video)</p>

              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. Definiții</h2>
                  <p>
                    1.1. „Prestator" – Ghilino Prod SRL, cu sediul social în Str. Exemplu nr. 10, București, CUI
                    RO12345678.
                  </p>
                  <p>
                    1.2. „Beneficiar" – orice persoană fizică sau juridică care solicită și achită serviciile
                    foto/video.
                  </p>
                  <p>
                    1.3. „Servicii" – activitățile de filmare, fotografiere, editare și post-producție convenite între
                    părți.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">2. Obiectul Contractului</h2>
                  <p>
                    2.1. Prestatorul se obligă să presteze servicii foto și video, în condițiile și la termenele agreate
                    în oferta/proformă/invocarea de comandă.
                  </p>
                  <p>
                    2.2. Beneficiarul se obligă să achite contravaloarea serviciilor la termenele și în condițiile
                    stabilite.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">3. Livrarea Materialelor</h2>
                  <p>
                    3.1. Termenul de predare a materialelor finale (foto/video) se stabilește în ofertă și poate fi
                    prelungit cu acordul părților, în scris.
                  </p>
                  <p>
                    3.2. Livrarea se face electronic (link download securizat) sau pe suport fizic la cerere, cu taxa de
                    transport aferentă.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. Plata și Condiții Comerciale</h2>
                  <p>
                    4.1. Plata se efectuează prin transfer bancar în contul IBAN ROxxXXXXxx…, conform proformei trimise.
                  </p>
                  <p>
                    4.2. Un avans de minim 30% din valoarea totală este datorat la acceptarea ofertei; restantul până la
                    predarea materialelor finale.
                  </p>
                  <p>4.3. Neachitarea la termen atrage penalități de 0,1% pe zi de întârziere din suma restantă.</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">5. Drepturi de Proprietate Intelectuală</h2>
                  <p>
                    5.1. Drepturile de autor asupra imaginilor și filmărilor rămân în proprietatea Prestatorului până la
                    plata integrală.
                  </p>
                  <p>
                    5.2. La plata integrală, Prestatorul transmite Beneficiarului drept de utilizare nelimitată în
                    scopuri comerciale și necomerciale, menționând sursa la nevoie.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. Responsabilități și Răspundere</h2>
                  <p>
                    6.1. Prestatorul nu răspunde pentru evenimente de forță majoră care afectează derularea ședinței
                    foto/video.
                  </p>
                  <p>
                    6.2. Beneficiarul răspunde pentru acordul persoanelor fotografiate/filmate și pentru respectarea
                    dreptului la imagine.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. Anulări și Modificări</h2>
                  <p>
                    7.1. Anularea serviciilor cu cel puțin 14 zile înainte de data programată nu atrage costuri
                    suplimentare, avansul fiind creditabil pentru o nouă dată.
                  </p>
                  <p>7.2. Dacă anularea survine în mai puțin de 14 zile, avansul este reținut integral.</p>
                  <p>7.3. Modificările de dată/locație se agrează în scris și pot genera costuri suplimentare.</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">8. Confidențialitate</h2>
                  <p>
                    8.1. Orice materiale și detalii primite de la Beneficiar vor fi tratate cu confidențialitate și nu
                    vor fi divulgate terților fără acord.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    9. Lege Aplicabilă și Soluționarea Litigiilor
                  </h2>
                  <p>9.1. Prezentul contract este guvernat de legea română.</p>
                  <p>
                    9.2. Litigiile se soluționează pe cale amiabilă, iar în lipsă, de instanțele competente din
                    București.
                  </p>
                </section>
              </div>
            </TabsContent>

            <TabsContent value="cookies" className="text-white/80 space-y-6">
              <h1 className="text-3xl font-bold text-white mb-6">Politica de Cookies</h1>
              <p className="text-lg text-white/90 italic mb-6">(Ghilino Prod – website www.ghilinoprod.ro)</p>

              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. Ce sunt cookie-urile?</h2>
                  <p>
                    Cookie-urile sunt fișiere text mici stocate pe dispozitivul tău atunci când vizitezi un website,
                    pentru a optimiza experiența de navigare.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">2. Tipuri de cookie-uri utilizate</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="font-medium text-white">Strict necesare:</span> asigură funcționarea site-ului
                      (ex.: menținerea sesiunii).
                    </li>
                    <li>
                      <span className="font-medium text-white">Funcționale:</span> rețin preferințe (limbă, layout).
                    </li>
                    <li>
                      <span className="font-medium text-white">Analitice:</span> colectează date aggregate despre
                      utilizare (Google Analytics).
                    </li>
                    <li>
                      <span className="font-medium text-white">De marketing:</span> permit afișarea de reclame
                      personalizate (Facebook Pixel, Google Ads).
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    3. Consimțământ și gestionarea cookie-urilor
                  </h2>
                  <p>
                    3.1. La prima accesare, vei fi informat printr-un banner și poți accepta sau refuza cookie-urile
                    neesențiale.
                  </p>
                  <p>
                    3.2. Poți modifica preferințele oricând din setările browser-ului sau din link-ul „Cookie Settings"
                    din footer.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. Durata de stocare</h2>
                  <p>Cookie-urile pot fi:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>„Session" (dispar la închiderea browser-ului)</li>
                    <li>„Persistente" (rămân până la expirare, 6 luni – 2 ani)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">5. Contact</h2>
                  <p>Pentru întrebări despre politica de cookies, scrie la cookies@ghilinoprod.ro.</p>
                </section>
              </div>
            </TabsContent>

            <TabsContent value="privacy" className="text-white/80 space-y-6">
              <h1 className="text-3xl font-bold text-white mb-6">Politica de Confidențialitate</h1>
              <p className="text-lg text-white/90 italic mb-6">
                (Ghilino Prod – protecția datelor cu caracter personal)
              </p>

              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. Operatorul de date</h2>
                  <p>
                    Ghilino Prod SRL, Str. Exemplu nr.10, București, telefon 021 xxx xxxx, email: office@ghilinoprod.ro.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">2. Date colectate și scopuri</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse my-4">
                      <thead>
                        <tr className="bg-[#2A2A2A]">
                          <th className="border border-white/20 p-3 text-left">Date colectate</th>
                          <th className="border border-white/20 p-3 text-left">Scop</th>
                          <th className="border border-white/20 p-3 text-left">Bază legală</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-white/20 p-3">Nume, prenume, CNP (opțional)</td>
                          <td className="border border-white/20 p-3">Identificare client, facturare</td>
                          <td className="border border-white/20 p-3">Art. 6 alin. (1) b GDPR</td>
                        </tr>
                        <tr className="bg-[#1E1E1E]">
                          <td className="border border-white/20 p-3">Email, telefon</td>
                          <td className="border border-white/20 p-3">Comunicare oferte, confirmare programări</td>
                          <td className="border border-white/20 p-3">Art. 6 alin. (1) b și f</td>
                        </tr>
                        <tr>
                          <td className="border border-white/20 p-3">Adresă (pentru deplasări)</td>
                          <td className="border border-white/20 p-3">Organizarea logisticii</td>
                          <td className="border border-white/20 p-3">Art. 6 alin. (1) b</td>
                        </tr>
                        <tr className="bg-[#1E1E1E]">
                          <td className="border border-white/20 p-3">Imagini și materiale audio/video</td>
                          <td className="border border-white/20 p-3">Prestație de servicii foto/video</td>
                          <td className="border border-white/20 p-3">Art. 6 alin. (1) b și consimțământ</td>
                        </tr>
                        <tr>
                          <td className="border border-white/20 p-3">Date de navigare pe site (cookie-uri)</td>
                          <td className="border border-white/20 p-3">Analiză și optimizare site</td>
                          <td className="border border-white/20 p-3">Art. 6 alin. (1) a și f</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">3. Retenția datelor</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Datele clienților: păstrate pe durata colaborării + 5 ani (implicații fiscale).</li>
                    <li>Materiale foto/video: livrate și arhivate timp de 2 ani, apoi pot fi șterse la cerere.</li>
                    <li>Date cookie: conform perioadei de expirare specificate.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. Drepturile persoanelor vizate</h2>
                  <p>
                    Poți solicita oricând: acces, rectificare, ștergere (dreptul „de a fi uitat"), restricționare,
                    portabilitate, opoziție și retragerea consimțământului la office@ghilinoprod.ro.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">5. Securitatea datelor</h2>
                  <p>
                    Aplicăm măsuri tehnice și organizatorice (criptare, acces restricționat, backup regulat) pentru
                    protejarea datelor.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. Transfer internațional</h2>
                  <p>
                    Datele nu sunt transferate în afara UE fără garanții adecvate (SCC – Clauze Contractuale Standard).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. Modificări ale Politicii</h2>
                  <p>
                    Această politică poate fi actualizată; versiunea în vigoare este afișată pe site cu data ultimei
                    revizuiri.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">8. Contact și reclamații</h2>
                  <p>
                    Pentru orice nelămuriri sau plângeri legate de prelucrarea datelor personale, ne poți contacta la
                    office@ghilinoprod.ro sau poți depune o sesizare la ANSPDCP (www.dataprotection.ro).
                  </p>
                </section>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm">Ultima actualizare: 10 Mai 2025</p>
        </div>
      </div>
    </>
  )
}
