
import * as C from './styles';
import {Item} from '../../types/item';
import { useState } from 'react';

type Props = {
    item: Item;
    onChecked: (id: number) => void

}

function ListItem({item, onChecked}: Props) {
    
    const [isChecked, setIsChecked] = useState(item.done);

    return (
      <C.Container done={isChecked}>
          <input 
            type="checkbox" 
            checked={isChecked} 
            onChange={(e) => {
              onChecked(item.id);
              setIsChecked(e.target.checked)
              
            }}
          />
          <label>{item.name}</label>
      </C.Container>
    );
}

export default ListItem;