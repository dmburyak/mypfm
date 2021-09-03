export interface Cost {
  id?: number | null;
  date: Date;
  flat: number | null;
  kindergarten: number | null;
  food: number | null;
  dress: number | null;
  medicine: number | null;
  toys: number | null;
  other: number | null;
  comment: string | null;
}
