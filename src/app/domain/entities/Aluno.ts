export default class Aluno {
  id: number;
  name: string;
  document?: string;

  constructor(
    id: number,
    name: string,
    document?: string,
  ) {
    this.id = id;
    this.name = name;
    this.document = document;
  }
}
