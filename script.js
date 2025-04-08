//your JS code here. If required.
<script>
function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity;
    }

    let highest = -Infinity;
    let second_highest = -Infinity;

    for (let num of arr) {
        if (num > highest) {
            second_highest = highest;
            highest = num;
        } else if (num > second_highest && num !== highest) {
            second_highest = num;
        }
    }

    return second_highest === -Infinity ? -Infinity : second_highest;
}
</script>
