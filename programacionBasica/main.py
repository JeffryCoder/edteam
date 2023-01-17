# PROGRAMA (JUEGO) ADIVINA EL NUMERO

numeroParaAdivinar = 13549
numeroIntroducido = 0

print("Hola, bienvenido al juego 'Adivinalo'.")
print("Tienes que adivinar un numero que estoy pensando")
print("Comencemos!")
print("")

while numeroIntroducido != numeroParaAdivinar:

    numeroIntroducido = int(input("¿Cuál es el numero?: "))

    if numeroIntroducido > numeroParaAdivinar:
        print("Digita un numero menor: ")
    elif numeroIntroducido < numeroParaAdivinar:
        print("Digita un numero mayor: ")
    else:
        print("Felicitaciones, ¡Adivinaste el numero!")
   


# Funcion para comprobar numeros enteros o strings

# numerosEnteros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]