import { useState } from 'react';
import './style.css';
import type Charge from '../../utils/interfaces/Charge';
type Props = {
  addItem: (title: string, charge: Charge) => void;
};

function InvoiceForm({ addItem }: Props) {
  const [formData, setFormData] = useState({
    title: '',
    charge: {
      billed: 'fixed',
      hours: '',
      rate: '',
    },
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!formData.title) {
      alert('please enter a name for this charge');
      return;
    }
    //TODO: why are we asserting this object is a `Charge`? What would happen if we did not assert the type?
    //ANSWER: If you did not assert the type, TypeScript would infer the type of chargeData based on its properties. 
    // If it cannot determine a specific type, it may default to any, which removes type safety.
    const chargeData = {
      billed: formData.charge.billed,
      price: parseFloat(formData.charge.rate) || 0,
    } as Charge;
    //TODO: What purpose does this `if` statement serve?
    //ANSWER: To check whether the billed value hourly before making hourly calculations
    if (chargeData.billed === 'hourly') {
      chargeData.hours = parseInt(formData.charge.hours);
      chargeData.hourlyRate = chargeData.price;
      chargeData.price = chargeData.hours * chargeData.hourlyRate;
    }
    //TODO: Where is this function coming from?
    //ANSWER: from the props passed to the InvoiceForm component.
    addItem(formData.title, chargeData);
    setFormData({
      title: '',
      charge: {
        billed: 'fixed',
        hours: '',
        rate: '',
      },
    });
  };

  return (
    <form className='InvoiceForm' onSubmit={handleSubmit}>
      <label htmlFor='item'>Item:</label>
      <input
        id='item'
        type='text'
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <label htmlFor='billed'>Billed:</label>
      <select
        id='billed'
        value={formData.charge.billed}
        onChange={(e) =>
          setFormData({
            ...formData,
            charge: {
              ...formData.charge,
              billed: e.target.value,
            },
          })
        }
      >
        <option value='fixed'>Fixed Cost</option>
        <option value='hourly'>Hourly Rate</option>
      </select>
      {formData.charge.billed === 'hourly' ? (
        <>
          <label htmlFor='hours'>Hours:</label>
          <input
            id='hours'
            type='number'
            value={formData.charge.hours}
            onChange={(e) =>
              setFormData({
                ...formData,
                charge: {
                  ...formData.charge,
                  hours: e.target.value,
                },
              })
            }
          />
        </>
      ) : null}
      <label htmlFor='rate'>Rate:</label>
      <input
        id='rate'
        type='number'
        value={formData.charge.rate}
        onChange={(e) =>
          setFormData({
            ...formData,
            charge: {
              ...formData.charge,
              rate: e.target.value,
            },
          })
        }
      />
      <button>Add Charge</button>
    </form>
  );
}

export default InvoiceForm;
