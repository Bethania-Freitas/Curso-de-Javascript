let valores = [8, 1, 7, 4, 2, 9]


for (let index = 0; index < valores.length; index++) {
    console.log(`Vetor ${valores[index]}`)
    
}

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}
