import {useState} from "react";

function randomInteger(min: number, max: number): number {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  return  Math.round(rand);
}

export const HomeWork1 = () => {
  const [roll, setRoll] = useState<number>();
  const diceRoll = () => setRoll(randomInteger(1,20));

  return (
    <div style={{height: 'calc(100vh - 96px)', padding: '15px 0', display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <button onClick={diceRoll} style={{background: '#fff', padding: '10px', border: 'medium dashed blue', borderRadius: '10px'}}>Бросить кубик d20</button>
      <div style={{marginTop: '100px', fontSize: '24px'}}>
        Результат броска: <span style={{fontWeight: 'bold', fontSize: '36px'}}>{roll}</span>
      </div>
    </div>
  );
};
