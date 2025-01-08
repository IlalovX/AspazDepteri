import RecipeCard from '../components/RecipeCard'
import { food } from '../db/links'

export default function Recipes() {
	const recipes = food

	return (
		<div>
			<div className='recipes-container main'>
				{recipes.map((recipe, index) => (
					<RecipeCard key={index} recipe={recipe} />
				))}
			</div>
		</div>
	)
}
