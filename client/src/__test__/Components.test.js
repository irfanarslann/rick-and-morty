/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Filter from '../Components/Filter';
import CharacterItem from '../Components/CharacterItem';
import FilterButton from '../Components/FilterButton';
import Loading from '../Components/Loading';

it('Filter Component Renders Correctly', async () => {
  render(<Filter />);

  expect(await screen.findByText(/Filter/i)).toBeInTheDocument();
});

it('CharacterItem Component Renders Correctly', async () => {
  let character = {
    id: 1,
    name: 'Test',
    status: 'Alive',
    species: 'test',
    type: 'test',
    gender: 'Male',
    origin: { name: 'test' },
    location: { name: 'test' },
    image: 'adfasdf',
    url: 'fdsaasdf',
    episode: ['', ''],
    created: '',
  };

  render(<CharacterItem character={character} />);

  expect(await screen.findByText(/#id/i)).toBeInTheDocument();
  expect(await screen.findByText(/name/i)).toBeInTheDocument();
  expect(await screen.findByText(/location/i)).toBeInTheDocument();
});

it('Filter Button Component Renders And Works Correctly', () => {
  const setFilterModalActive = () => {
    return 'Filter Model Set';
  };
  render(<FilterButton name='' setFilterModalActive={setFilterModalActive} />);
  expect(screen.getByRole('button')).toBeTruthy();
});

describe('Filter button', () => {
  it('Filter button clicks', async () => {
    let setFilterModalActive = jest.fn();
    render(
      <FilterButton name='' setFilterModalActive={setFilterModalActive} />
    );

    fireEvent.click(screen.getByRole('button'));
    expect(setFilterModalActive).not.toHaveBeenCalled();
  });
});

it('Loading Component Rendreds Correctly', async () => {
  render(<Loading />);
  expect(screen.getByTestId('loading-test')).toBeTruthy();
});

it('useFetch test', async () => {
  render(<Loading />);
  expect(screen.getByTestId('loading-test')).toBeTruthy();
});
