# template-generator
Generates code templates for technical interview questions from json file

## Usage
```
node dist/template-generator.js < aplusb.json
```
### `aplusb.json`
```json
{
  "method": "aplusb",
  "params": [
    {
      "name": "a",
      "desc": "The first integer",
      "type": "int"
    },
    {
      "name": "b",
      "desc": "The second integer",
      "type": "int"
    }
  ],
  "return": {
    "type": "int",
    "desc": "The sum of a and b"
  },
  "hint": "write your code here, try to do it without arithmetic operators."
}
```

## Results
### C++
#### ```solution.cpp```
```cpp
class Solution {
    public:
    /*
     * param a: The first integer
     * param b: The second integer
     * return: The sum of a and b
     */
    int aplusb(int a, int b) {
        // write your code here, try to do it without arithmetic operators.
    }
};
```
#### ```main.cpp```
```cpp
int main() {
    string data;
    std::getline(std::cin, data);
    int a = parseInt(data);
    std::getline(std::cin, data);
    int b = parseInt(data);
    Solution solution;
    std::cout << defaultEncoder(solution.aplusb(a, b)) << std::endl;
    return 0;
}
```
### Python
#### ```solution.py```
```python
class Solution:
    """
    @param a: The first integer
    @param b: The second integer
    @return: The sum of a and b
    """
    def aplusb(self, a, b):
    # write your code here, try to do it without arithmetic operators.
```
#### ```main.py```
```python
import sys

a = parseInt(sys.stdin.readline())
b = parseInt(sys.stdin.readline())
solution = Solution()
print defaultEncoder(solution.aplusb(a, b))
```
### Java
#### ```Solution.java```
```java
class Solution {
    /*
     * param a: The first integer
     * param b: The second integer
     * return: The sum of a and b
     */
    public int aplusb(int a, int b) {
        // write your code here, try to do it without arithmetic operators.
    }
};
```
#### ```Main.java```
```java
class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = parseInt(scanner.nextLine());
        int b = parseInt(scanner.nextLine());
        Solution solution = new Solution();
        String result = defaultEncoder(solution.aplusb(a, b));
        System.out.println(result);
    }
}
```
## Structure

- ```rules```: Language specific configurations
- ```templates```: main / solution templates
- ```index.js```: Entry point
- ```dist```: Single-file production ready binary
