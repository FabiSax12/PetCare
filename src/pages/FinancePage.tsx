import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

export const FinancePage = () => {
  const incomeByClinic = {
    labels: ['San José', 'Heredia', 'Alajuela', 'Cartago'],
    datasets: [{
      label: 'Ingresos por Clínica',
      data: [12000, 8500, 9400, 7100],
      backgroundColor: ['#4bc0c0', '#36a2eb', '#9966ff', '#ff9f40'],
      borderRadius: 8
    }]
  };

  const incomeTrend = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [{
      label: 'Ingresos Mensuales',
      data: [4000, 4200, 5000, 4500, 4700, 5300],
      fill: true,
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: '#9966ff',
      tension: 0.3,
      pointRadius: 5
    }]
  };

  const serviceDistribution = {
    labels: ['Consultas', 'Cirugías', 'Vacunación', 'Estética'],
    datasets: [{
      label: 'Distribución de Servicios',
      data: [5000, 2000, 3000, 1000],
      backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0']
    }]
  };

  const expenses = [
    { item: 'Compra de insumos', amount: 3200 },
    { item: 'Pago de salarios', amount: 5000 },
    { item: 'Servicios públicos', amount: 1800 }
  ];

  return (
    <div className="financial-dashboard">
      {/* <h2 className="title">Panel Financiero</h2> */}
      <div className="grid">
        <div className='flex flex-col gap-2'>
          <div className="card"><Bar data={incomeByClinic} /></div>
          <div className="card"><Line data={incomeTrend} /></div>
        </div>
        <div className="card"><Pie data={serviceDistribution} /></div>
        <div className="card"><Doughnut data={serviceDistribution} /></div>
      </div>

      <div className="expenses">
        <h3>Últimos Egresos</h3>
        <table>
          <thead>
            <tr><th>Concepto</th><th>Monto (₡)</th></tr>
          </thead>
          <tbody>
            {expenses.map((e, i) => (
              <tr key={i}>
                <td>{e.item}</td>
                <td>{e.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}