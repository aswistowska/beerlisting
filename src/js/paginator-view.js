export default class PaginatorView {
    constructor(element, pages=5) {
        this.element = element;
        this.pages = pages;
    }

    setPage(currentPage=1){
        this.currentPage = currentPage;
        this.element.innerHTML = this.render();

        [...document.getElementsByClassName("page-number")].forEach(function(element) {
            element.addEventListener("click", () => {
                const page = parseInt(element.dataset.page);
                if(page > 0) {
                    window.app.showGrid(page);
                }
            });
        });
    }

    renderPage(pageNumber) {
        return `<div class="page-number ${pageNumber == this.currentPage ? "current" : ""}" 
                     data-page="${pageNumber}">${pageNumber}</div>`;
    }

    render() {
        const start = Math.max(1, this.currentPage - Math.floor(this.pages/ 2));
        const pageNumbers = [];
        for(let p = 0; p < this.pages; p++) {
            pageNumbers.push(start + p);
        }

        let renderedPageNumbers = pageNumbers.map(pageNumber => this.renderPage(pageNumber)).join("");
        return `<div class="paginator">
                    <div class="page-number" data-page="${this.currentPage -1}">«</div>
                    ${renderedPageNumbers}
                    <div class="page-number" data-page="${this.currentPage +1}">»</div>
                </div>`;

    }
}