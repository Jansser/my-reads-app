const api = 'https://reactnd-books-api.udacity.com';

// Generate a unique token for storing your bookshelf data on the backend server.

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: 'application/json',
  Authorization: token
};

export const get = bookId =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book);

export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books);

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json());

export const search = query =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  })
    .then(res => res.json())
    .then(data => data.books);

export const getAllRatings = () => {
  let ratings = JSON.parse(localStorage.getItem('ratings'));

  if(ratings === null) {
    ratings = {};
    localStorage.setItem('ratings', JSON.stringify(ratings))
  }

  return ratings;
}

export const updateRate = (book, rate) => {
  let ratings = getAllRatings();
  ratings[book.id] = rate;

  localStorage.setItem('ratings', JSON.stringify(ratings));
}

export const getRating = (book) => {
	const ratings = getAllRatings();
  const id = book.id;

  if(ratings[id]) {
    return ratings[id]
  } else {
    return 0;
  }
};
