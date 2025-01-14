import { useState } from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';

function BucketList() {
	const [bucket, setBucket] = useState([]);

	// Function to add a bucket list item
	const addBucketItem = (item) => {
		// TODO: Write logic to add the new bucket item to the bucket state variable
		const nextBucket = [...bucket, item];
		setBucket(nextBucket);
	};

	// Function to mark bucket list item as complete
	const completeBucketItem = (id) => {
		// If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
		// let updatedBucket = bucket.map((item) => {
		// TODO: Write logic that marks an item as complete or incomplete when invoked

		// 	if (item.id === id) {
		// 		item.complete = true;
		// 	}
		// });

		// setBucket(updatedBucket);

		setBucket((prev) =>
			prev.map((item) => {
				if (!item.complete) {
					return item.id === id ? { ...item, complete: true } : item;
				} else {
					return item.id === id ? { ...item, complete: false } : item;
				}
			})
		);
	};

	// Function to remove bucket list item and update state
	const removeBucketItem = (id) => {
		// TODO: Write logic that will return an array of items that don't contain the ID passed to this function
		// TODO: Update the bucket state variable
		for (let i = 0; i < bucket.length; i++) {
			const item = bucket[i];

			if (item.id === id) {
				const updatedBucket = bucket.toSpliced(i, 1);
				setBucket(updatedBucket);
				return updatedBucket;
			}
		}

		return bucket;
	};

	// Function to edit the bucket list item
	const editBucketItem = (itemId, newValue) => {
		// Make sure that the value isn't empty
		if (!newValue.text) {
			return;
		}

		// We use the "prev" argument provided with the useState hook to map through our list of items
		// We then check to see if the item ID matches the id of the item that was clicked and if so, we set it to a new value
		setBucket((prev) =>
			prev.map((item) => (item.id === itemId ? newValue : item))
		);
	};

	return (
		<div>
			<h1>What is on your bucket list?</h1>
			<BucketForm onSubmit={addBucketItem} />
			<Bucket
				bucket={bucket}
				completeBucketItem={completeBucketItem}
				removeBucketItem={removeBucketItem}
				editBucketItem={editBucketItem}
			></Bucket>
		</div>
	);
}

export default BucketList;
