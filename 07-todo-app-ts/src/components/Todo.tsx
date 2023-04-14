import { type TodoId, type Todo as TodoType } from '../types.d'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onTogglecompleted: ({ id }: Pick<TodoType, 'id' | 'completed'>) => void
}
export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onTogglecompleted }) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onTogglecompleted({ id, completed: event.target.checked })
  }

  return (
		<div className="view">
			<input
				className="toggle"
				type="checkbox"
				checked={completed}
				onChange={handleChangeCheckbox}
			/>
			<label>{title}</label>
			<button
				className="destroy"
				onClick={() => { onRemoveTodo({ id }) }}
			/>
		</div>
  )
}
