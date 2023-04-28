var render = require("@testing-library/react").render;
var SeriesPage = require("../Series");
describe("SeriesPage", function() {
    test("should render the component", function() {
        var getByTestId = render(SeriesPage()).getByTestId;
        var mainContent = getByTestId("main-content");
        expect(mainContent).toBeInTheDocument();
    });
});