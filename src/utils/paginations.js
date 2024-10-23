export default class Pagination {
  constructor(items = [], pageSize = 9) {
    this.items = items; 
    this.pageSize = pageSize; 
    this.currentPage = 1; 
    this.totalPages = Math.ceil(this.items.length / this.pageSize);
  }

  // Get items for the current page
  getPaginatedItems() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.items.slice(start, end);
  }

  // Go to the previous page
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
    }
  }

  // Go to a specific page
  goToPage(page) {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // Check if it's the first page
  isFirstPage() {
    return this.currentPage === 1;
  }

  // Check if it's the last page
  isLastPage() {
    return this.currentPage === this.totalPages;
  }
}
