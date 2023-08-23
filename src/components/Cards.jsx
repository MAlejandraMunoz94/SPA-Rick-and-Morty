import Card from './Card';

export default function Cards({characters,onClose}) {
   return (<div>
      {characters.map(element => <Card key= {element.id} id={element.id} props = {element} onClose={onClose} />)}
   </div>);
};
