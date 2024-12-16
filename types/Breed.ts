export interface Breed {
  id: number;
  name: string;
  breed_group: string;
  temperament?: string;
  life_span?: string;
  image?: {
    url: string;
  };
  bred_for?: string;
  size?: string;
  height?: {
    imperial?: string;
    metric?: string;
  };
  weight?: {
    imperial?: string;
    metric?: string;
  };
}
