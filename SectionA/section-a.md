# anagram.py Review

line 1: 

    class Solution

You don't need to use a class here, because the method doesn't depend on any class-specific state.

<br>

line 3:

    result = {}

`result` is not a very descriptive name, a better name to use would be `anagram_groups`

<br>

line 5:

    x = "".join(sorted())

You are missing the `i` parameter which needs to be sorted

<br>

line 10:

    return list(result.values())

You don't have to use `list` here, because `values()` already returns a list 

<br>

line 11:

    ob1 = Solution()

Again, you don't need this line because a class in not necessary in this case

<br>

## Improvements

* Use underscores instead of camel case to improve readability 
* Use variable names which are easier to follow

Over all I think you did a good job with not too many mistakes, keep up the good work!