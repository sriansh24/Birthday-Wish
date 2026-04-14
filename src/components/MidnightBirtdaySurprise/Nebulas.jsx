function Nebulas() {
  const blobs = [
    { width: 400, height: 300, left: '-10%', top: '10%',    background: 'rgba(80,0,180,0.12)'  },
    { width: 300, height: 250, right: '-5%', top: '30%',    background: 'rgba(0,100,200,0.1)'  },
    { width: 250, height: 200, left: '20%',  bottom: '5%',  background: 'rgba(120,0,100,0.09)' },
  ]

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {blobs.map((b, i) => (
        <div key={i} className="nebula" style={b} />
      ))}
    </div>
  )
}
export default Nebulas;