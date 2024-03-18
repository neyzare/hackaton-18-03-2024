import React, { useEffect } from 'react';
import '../css/Energy-info.css';

function EnergyInfo() {
  useEffect(() => {
    const canvas = document.getElementById("energyCanvas");
    const ctx = canvas.getContext("2d");

    // Étiquettes énergie
    const energyLabels = ["A", "B", "C", "D", "E", "F", "G"];
    const energyColors = ["#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722"];
    const energyStartX = 50;
    const energyStartY = 50;
    const energyWidth = 200;
    const energyHeight = 40;
    const energyGap = 20;
    const triangleSize = 10;

    // Étiquettes CO2
    const co2Labels = ["A", "B", "C", "D", "E", "F", "G"];
    const co2Colors = ["#1976D2", "#1565C0", "#0D47A1", "#0D47A1", "#0D47A1", "#0D47A1", "#0D47A1"];
    const co2StartX = energyStartX + energyWidth + energyGap * 2; // À droite de la consommation d'énergie
    const co2StartY = energyStartY;
    const co2Width = 200;
    const co2Height = 40;
    const co2Gap = 20;

    // Dessiner les étiquettes énergie
    for (let i = 0; i < energyLabels.length; i++) {
      const x = energyStartX;
      const y = energyStartY + (energyHeight + energyGap) * i;

      ctx.fillStyle = energyColors[i];
      ctx.fillRect(x, y, energyWidth, energyHeight);

      // Dessin du triangle
      ctx.beginPath();
      ctx.moveTo(x + energyWidth, y);
      ctx.lineTo(x + energyWidth + triangleSize, y + energyHeight / 2);
      ctx.lineTo(x + energyWidth, y + energyHeight);
      ctx.closePath();
      ctx.fill();

      ctx.font = "bold 16px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(energyLabels[i], x + energyWidth / 2, y + energyHeight / 2);
    }

    // Dessiner les étiquettes CO2
    for (let i = 0; i < co2Labels.length; i++) {
      const x = co2StartX;
      const y = co2StartY + (co2Height + co2Gap) * i;

      ctx.fillStyle = co2Colors[i];
      ctx.fillRect(x, y, co2Width, co2Height);

      // Dessin du triangle
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - triangleSize, y + co2Height / 2);
      ctx.lineTo(x, y + co2Height);
      ctx.closePath();
      ctx.fill();

      ctx.font = "bold 16px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(co2Labels[i], x + co2Width / 2, y + co2Height / 2);
    }
  }, []);

  return (
    <>
      <h3>Votre étiquette énergie</h3>
      <canvas id="energyCanvas" width="800" height="600"></canvas>
      <div className="label-text">Efficacité énergétique</div>
    </>
  );
}

export default EnergyInfo;
