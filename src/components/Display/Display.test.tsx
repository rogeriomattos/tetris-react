import { render, screen } from "@testing-library/react";
import Display from ".";

describe('components/Display', () => {
    describe('When component render', () => {
        it('should to have 30 rows and 10 columns', () => {
            render(<Display />);

            const container = screen.getByTestId('display-container');

            expect(container).toBeVisible();

            const rows = screen.getAllByTestId('display-row');
            expect(rows).toHaveLength(20);

            const blocks = screen.getAllByTestId('block');
            expect(blocks).toHaveLength(200);
        });
    })
});