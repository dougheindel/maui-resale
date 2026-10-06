import React from 'react'
import { createRoot } from 'react-dom/client'
import { ExternalLink, ArrowUpRight, Check, AlertCircle } from 'lucide-react'
import './styles.css'

const hrcSearch = 'https://www.redweek.com/resort/P6386-hyatt-vacation-club-at-kaanapali-beach/timeshare-resales?type=resales&available_type=by_week&start_week=week_25&end_week=week_35&unit_type_id=574&use=Annual&ownership_type=Deeded&bedrooms=2&sleeps=6&sort=week'
const naneaSearch = 'https://www.redweek.com/resort/P6462-the-westin-nanea-ocean-villas/timeshare-resales?type=resales&available_type=by_week&unit_type_id=223&use=Annual&ownership_type=Deeded&bedrooms=1&sleeps=4'

const hrcComps = [
  { label: 'Week 27 · 2BR · Ocean View', price: '$45,000', meta: 'Annual · Deeded · $4,200 maint.', id: 'R747727', href: 'https://www.redweek.com/posting/R747727' },
  { label: 'Week 29 · 2BR · Ocean View', price: '$40,000', meta: 'Annual · Deeded · $4,343 maint.', id: 'R1526872', href: 'https://www.redweek.com/posting/R1526872', direct: true },
  { label: 'Week 29 · 2BR · Oceanfront', price: '$64,500', meta: 'Annual · Deeded · $1,873 maint.', id: 'R1326347', href: 'https://www.redweek.com/posting/R1326347', note: 'Oceanfront, so not apples-to-apples.' },
]

const naneaComps = [
  { label: '1BR · High Season · Resort View', price: '$10,000', meta: 'Annual · Deeded · $1,997 maint.', id: 'R1477628', href: 'https://www.redweek.com/posting/R1477628', direct: true },
  { label: '1BR · High Season · View unspecified', price: '$5,000', meta: 'Annual · Deeded · $1,700 maint.', id: 'R1522626', href: 'https://www.redweek.com/posting/R1522626' },
]

function ExternalButton({ href, children = 'View listing' }) {
  return <a className="button" href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={15} /></a>
}

function CompCard({ comp }) {
  return (
    <article className={`comp-card ${comp.direct ? 'direct' : ''}`}>
      <div className="comp-main">
        <div>
          {comp.direct && <div className="tag"><Check size={12} /> closest direct comp</div>}
          <h3>{comp.label}</h3>
          <p>{comp.meta}</p>
          {comp.note && <p className="note"><AlertCircle size={14} /> {comp.note}</p>}
        </div>
        <div className="comp-price">{comp.price}</div>
      </div>
      <div className="comp-footer">
        <span>RedWeek posting {comp.id}</span>
        <ExternalButton href={comp.href} />
      </div>
    </article>
  )
}

function App() {
  return (
    <div className="site">
      <main>
        <section className="hero">
          <div className="eyebrow">Maui resale review · October 2026</div>
          <h1>What are the Maui timeshares worth?</h1>
          <div className="hero-rule" />
        </section>

        <section className="stats">
          <div className="stat-card featured">
            <span>Working gross value</span>
            <strong>~$90k</strong>
            <small>Scenario using ~$40k per HRC week + $10k Nanea</small>
          </div>
          <div className="stat-card">
            <span>Annual maintenance</span>
            <strong>~$11k</strong>
            <small>Current combined recurring fees</small>
          </div>
          <div className="stat-card">
            <span>Potential annual savings</span>
            <strong>~$11k</strong>
            <small>If all Maui ownership is sold</small>
          </div>
        </section>

        <section className="section valuation">

          <div className="table-wrap">
            <table>
              <thead><tr><th>Interest</th><th>Benchmark</th><th>Annual maintenance</th></tr></thead>
              <tbody>
                <tr><td>HRC Week 29</td><td>~$40,000</td><td>~$4,500</td></tr>
                <tr><td>HRC Week 30</td><td>~$40,000*</td><td>~$4,500</td></tr>
                <tr><td>Nanea 1BR Resort View</td><td>~$10,000</td><td>~$2,000</td></tr>
                <tr className="total"><td>Total</td><td>~$90,000*</td><td>~$11,000 / year</td></tr>
              </tbody>
            </table>
          </div>

        </section>
        
        <section className="section">
          <div className="section-head">
            <div>
              <div className="eyebrow">Hyatt</div>
              <h2>Hyatt Vacation Club at Ka'anapali Beach</h2>
            </div>
            <a href={hrcSearch} target="_blank" rel="noreferrer className="ml-auto"">HRC filtered search <ExternalLink size={14} /></a>
          </div>
          <div className="cards">{hrcComps.map((c) => <CompCard key={c.id} comp={c} />)}</div>
          <div className="callout">
            <div className="callout-title">HRC benchmark</div>
            <p><strong>~$40,000 per week</strong> is the most defensible working benchmark from the current listings. The $64.5k oceanfront listing is useful as an upper reference, but it is not the same view.</p>
          </div>
          <a className="wide-link" href={hrcSearch} target="_blank" rel="noreferrer">Open HRC filtered comps <ArrowUpRight size={16} /></a>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <div className="eyebrow">Westin</div>
              <h2>The Westin Nanea Ocean Villas</h2>
            </div>
            <a href={naneaSearch} target="_blank" rel="noreferrer">Nanea filtered search <ExternalLink size={14} /></a>                        
          </div>
          <div className="cards">{naneaComps.map((c) => <CompCard key={c.id} comp={c} />)}</div>
          <a className="wide-link" href={naneaSearch} target="_blank" rel="noreferrer className="ml-auto"">Open Nanea filtered comps <ArrowUpRight size={16} /></a>
        </section>

      </main>

    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
