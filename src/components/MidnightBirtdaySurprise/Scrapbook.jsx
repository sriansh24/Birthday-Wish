import { MEMORIES, BIRTHDAY_PERSON } from '../../constants/data'

function Scrapbook() {
  return (
    <div
      className="scrapbook-enter"
      style={{
        width: '100%', maxWidth: 560,
        background: 'rgba(10,0,30,0.85)',
        border: '1.5px solid rgba(0,212,255,0.3)',
        borderRadius: 18, padding: 20,
        boxShadow: '0 0 40px rgba(0,212,255,0.15), 0 0 80px rgba(124,58,237,0.1)',
        marginTop: 16,
      }}
    >
      {/* Title */}
      <div style={{
        fontFamily: "'Cinzel Decorative', serif",
        fontSize: 'clamp(13px, 2.5vw, 18px)', fontWeight: 700,
        color: 'var(--neon-blue)',
        textShadow: '0 0 15px var(--neon-blue-glow)',
        marginBottom: 14, textAlign: 'center',
      }}>
        ✦ Digital Memory Scrapbook ✦
      </div>

      {/* Memory grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 14 }}>
        {MEMORIES.map((m, i) => (
          <div key={i} className="memory-card">
            <span style={{ fontSize: 'clamp(20px, 3vw, 28px)', display: 'block', marginBottom: 4 }}>
              {m.emoji}
            </span>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(9px, 1.5vw, 11px)',
              color: 'rgba(200,200,255,0.7)', fontStyle: 'italic', lineHeight: 1.3,
            }}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Birthday message */}
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(12px, 2vw, 15px)', fontStyle: 'italic',
        color: 'rgba(220,200,255,0.85)', textAlign: 'center', lineHeight: 1.6,
        borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 12,
      }}>
        Happy Birthday, {BIRTHDAY_PERSON.name} 🌙<br />
        May every star in this midnight sky be a wish that comes true for you.<br />
        <span style={{ color: 'rgba(0,212,255,0.8)', fontSize: '0.9em' }}>— With love, always ✦</span>
      </p>
    </div>
  )
}
export default Scrapbook;