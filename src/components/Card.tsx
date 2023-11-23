import "../styles/card.css";
import { CheckIcon } from '@radix-ui/react-icons';
import * as Checkbox from "@radix-ui/react-checkbox";

type CardProps = {
    title: string
}

export function Card(title : CardProps) {
  return (
    <div className="card">
      <Checkbox.Root className="CheckboxRoot" id="c1">
        <Checkbox.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <p className="title">{title.title}</p>
    </div>
  );
}
