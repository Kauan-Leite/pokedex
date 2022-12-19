import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

describe('Test Buttons', () => {
  it('Buttons in the screen', () => {
    render(<Home />)
    const regions = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar'];
    for (let index = 0; index < regions.length; index += 1) {
      expect(screen.getByText(regions[index])).toBeInTheDocument();
    }
  })
});