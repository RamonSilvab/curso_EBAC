class Pessoa {
    nome:string;
    renda?: number;

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla(): string {
        return `${this.nome} disse Oi.`;
    }
}
class ContaBancaria {
    protected saldo: number = 0;
    public numeroConta: number;

    constructor(numerodaConta: number) {
        this.numeroConta = numerodaConta;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
    private getSaldo() {
        return this.saldo;
    }
    depositar(valor: number) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoaFsisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new ContaBancariaPessoaFsisica(123456);
ContaBancaria.retornaNumeroDoBanco();