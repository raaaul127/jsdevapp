interface CarProps{
        brand: string;
        id: number;
    };

// export default function Car({brand, id}: CarProps) {
//   return <li>{id} - I am a {brand}</li>;
// }
export default function Car(props: CarProps) {
  return <li>{props.id} - I am a {props.brand}</li>;
}
