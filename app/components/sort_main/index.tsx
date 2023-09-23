import { SortSelect } from '../sort_select';
import { itemsCountArray, sortSelectArray } from '../sort_select/selectArrays';
import './style.scss';

function SortMain() {
	return (
		<div className='sort-main'>
			<SortSelect type='sort' label='Sort:' dataArray={sortSelectArray} />
			<SortSelect
				type='itemsPage'
				label='Items on page:'
				dataArray={itemsCountArray}
			/>
		</div>
	);
}

export { SortMain };
