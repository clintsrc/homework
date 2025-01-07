import Card from './Card';

const feline = {
  name: 'Fluffykins',
  description: 'A cat that acts like a dog',
  id: 1,
};

/* TODO: Write logic that will render a Card component for the kitten */
/* TODO: Pass `name`, `description`, and `id` to the Card component as props */
export default function Display() {
  return (
    <div>
        <Card 
          name={feline.name} 
          description={feline.description} 
          id={feline.id} 
    />        
    </div>
  );
}
