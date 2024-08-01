export function calculateAge(birthDateString: string): number {
    // Converta a string para um objeto Date
    const birthDate: Date = new Date(birthDateString);
    const today: Date = new Date();

    // Calcule a diferença entre os anos
    let age: number = today.getFullYear() - birthDate.getFullYear();

    // Ajuste a idade se a data de aniversário ainda não tiver ocorrido este ano
    const monthDifference: number = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}
