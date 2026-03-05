def get_fibonacci_sequence(n):
    """
    Genera la secuencia de Fibonacci con n valores.
    Ejemplo para n=5: [0, 1, 1, 2, 3]
    """
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    
    secuencia = [0, 1]
    while len(secuencia) < n:
        siguiente = secuencia[-1] + secuencia[-2]
        secuencia.append(siguiente)
    
    return secuencia

def main():
    try:
        entrada = input("¿Cuántos números de la secuencia Fibonacci quieres ver? ")
        n = int(entrada)
        
        if n < 0:
            print("Por favor, ingresa un número positivo.")
        else:
            secuencia = get_fibonacci_sequence(n)
            print(f"Secuencia de Fibonacci ({n} valores):")
            print(secuencia)
            
    except ValueError:
        print("Entrada inválida. Por favor, ingresa un número entero.")

if __name__ == "__main__":
    main()

