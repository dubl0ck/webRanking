// pruebas.js
const pruebas = {
  "Sub10": {
    "M": {
      "50m": {},
      "60m": {},
      "500m": {},
      "1000m": {},
      "Relevos": {},
      "60m vallas": { altura: 0.50, separacion: 7, vallas: 6 },
      "Peso": { peso: 2 }
    },
    "F": {
      "50m": {},
      "60m": {},
      "500m": {},
      "1000m": {},
      "Relevos": {},
      "60m vallas": { altura: 0.50, separacion: 7, vallas: 6 },
      "Peso": { peso: 2 }
    }
  },
  "Sub12": {
    "M": {
      "50m": {}, "60m": {}, "500m": {}, "1000m": {}, "Relevos": {},
      "60m vallas": { altura: 0.60, separacion: 7, vallas: 6 },
      "Peso": { peso: 2.5 }
    },
    "F": {
      "50m": {}, "60m": {}, "500m": {}, "1000m": {}, "Relevos": {},
      "60m vallas": { altura: 0.60, separacion: 7, vallas: 6 },
      "Peso": { peso: 2 }
    }
  },
  "Sub14": {
    "M": {
      "80m": {}, "150m": {}, "500m": {}, "1000m": {}, "2000m": {},
      "80m vallas": { altura: 0.84, separacion: 8, vallas: 8 },
      "220m vallas": { altura: 0.76, separacion: 20, vallas: 5 },
      "Peso": { peso: 3 },
      "Disco": { peso: 0.8 },
      "Jabalina": { peso: 0.4 },
      "Martillo": { peso: 3 }
    },
    "F": {
      "80m": {}, "150m": {}, "500m": {}, "1000m": {}, "2000m": {},
      "80m vallas": { altura: 0.76, separacion: 8, vallas: 8 },
      "220m vallas": { altura: 0.76, separacion: 20, vallas: 5 },
      "Peso": { peso: 3 },
      "Disco": { peso: 0.8 },
      "Jabalina": { peso: 0.5 },
      "Martillo": { peso: 3 }
    }
  },
  "Sub16": {
    "M": {
      "100m": {}, "300m": {}, "600m": {}, "1000m": {}, "3000m": {},
      "100m vallas": { altura: 0.914, separacion: 8.5, vallas: 10 },
      "300m vallas": { altura: 0.84, separacion: 35, vallas: 7 },
      "1500m obstáculos": { altura: 0.762 },
      "Peso": { peso: 4 },
      "Disco": { peso: 1 },
      "Jabalina": { peso: 0.6 },
      "Martillo": { peso: 4 }
    },
    "F": {
      "100m": {}, "300m": {}, "600m": {}, "1000m": {}, "3000m": {},
      "100m vallas": { altura: 0.762, separacion: 8.5, vallas: 10 },
      "300m vallas": { altura: 0.762, separacion: 35, vallas: 7 },
      "1500m obstáculos": { altura: 0.762 },
      "Peso": { peso: 3 },
      "Disco": { peso: 0.8 },
      "Jabalina": { peso: 0.5 },
      "Martillo": { peso: 3 }
    }
  },
  "Sub18": {
    "M": {
      "100m": {}, "200m": {}, "400m": {}, "800m": {}, "1500m": {}, "3000m": {},
      "110m vallas": { altura: 0.914, separacion: 9.14, vallas: 10 },
      "400m vallas": { altura: 0.84, separacion: 35, vallas: 10 },
      "2000m obstáculos": { altura: 0.914 },
      "Peso": { peso: 5 },
      "Disco": { peso: 1.5 },
      "Jabalina": { peso: 0.7 },
      "Martillo": { peso: 5 }
    },
    "F": {
      "100m": {}, "200m": {}, "400m": {}, "800m": {}, "1500m": {}, "3000m": {},
      "100m vallas": { altura: 0.762, separacion: 8.5, vallas: 10 },
      "400m vallas": { altura: 0.762, separacion: 35, vallas: 10 },
      "2000m obstáculos": { altura: 0.762 },
      "Peso": { peso: 3 },
      "Disco": { peso: 1 },
      "Jabalina": { peso: 0.5 },
      "Martillo": { peso: 3 }
    }
  },
  "Sub20": {
    "M": {
      "100m": {}, "200m": {}, "400m": {}, "800m": {}, "1500m": {}, "5000m": {}, "10000m": {},
      "110m vallas": { altura: 0.991, separacion: 9.14, vallas: 10 },
      "400m vallas": { altura: 0.914, separacion: 35, vallas: 10 },
      "3000m obstáculos": { altura: 0.914 },
      "Peso": { peso: 6 },
      "Disco": { peso: 1.75 },
      "Jabalina": { peso: 0.8 },
      "Martillo": { peso: 6 }
    },
    "F": {
      "100m": {}, "200m": {}, "400m": {}, "800m": {}, "1500m": {}, "5000m": {}, "10000m": {},
      "100m vallas": { altura: 0.838, separacion: 8.5, vallas: 10 },
      "400m vallas": { altura: 0.762, separacion: 35, vallas: 10 },
      "3000m obstáculos": { altura: 0.762 },
      "Peso": { peso: 4 },
      "Disco": { peso: 1 },
      "Jabalina": { peso: 0.6 },
      "Martillo": { peso: 4 }
    }
  },
  "Sub23": {
    "M": {
      "Carreras olímpicas": {},
      "110m vallas": { altura: 1.067, separacion: 9.14, vallas: 10 },
      "400m vallas": { altura: 0.914, separacion: 35, vallas: 10 },
      "3000m obstáculos": { altura: 0.914 },
      "Peso": { peso: 7.26 },
      "Disco": { peso: 2 },
      "Jabalina": { peso: 0.8 },
      "Martillo": { peso: 7.26 }
    },
    "F": {
      "Carreras olímpicas": {},
      "100m vallas": { altura: 0.838, separacion: 8.5, vallas: 10 },
      "400m vallas": { altura: 0.762, separacion: 35, vallas: 10 },
      "3000m obstáculos": { altura: 0.762 },
      "Peso": { peso: 4 },
      "Disco": { peso: 1 },
      "Jabalina": { peso: 0.6 },
      "Martillo": { peso: 4 }
    }
  },
  "Absoluto": {
    "M": {
      "Carreras olímpicas": {},
      "110m vallas": { altura: 1.067, separacion: 9.14, vallas: 10 },
      "400m vallas": { altura: 0.914, separacion: 35, vallas: 10 },
      "3000m obstáculos": { altura: 0.914 },
      "Peso": { peso: 7.26 },
      "Disco": { peso: 2 },
      "Jabalina": { peso: 0.8 },
      "Martillo": { peso: 7.26 }
    },
    "F": {
      "Carreras olímpicas": {},
      "100m vallas": { altura: 0.838, separacion: 8.5, vallas: 10 },
      "400m vallas": { altura: 0.762, separacion: 35, vallas: 10 },
      "3000m obstáculos": { altura: 0.762 },
      "Peso": { peso: 4 },
      "Disco": { peso: 1 },
      "Jabalina": { peso: 0.6 },
      "Martillo": { peso: 4 }
    }
  }
};
