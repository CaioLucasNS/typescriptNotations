const objetoA: {
  readonly chaveA: string; // impede de alterar o valor da chave
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; // index signature
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveB = 'Outro valor';
objetoA.chaveC = 'Novo valor';
objetoA.chaveD = 'Nova chave';

console.log(objetoA.chaveC);

// Module mode
export default 1;
