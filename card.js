  <script>
        function showResult(resultId) {
            // Clear all result cells
            const allResults = document.querySelectorAll('.result-cell');
            allResults.forEach(cell => {
                cell.style.display = 'none';
            });

            // Show the clicked result
            const resultCell = document.getElementById(resultId);
            resultCell.style.display = 'block';
        }
    </script>
