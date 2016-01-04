# template-generator
Generates code templates for technical interview questions from json file

## Usage
```
node dist/template-generator.js < aplusb.json
```

```
{
  "cpp": {
    "solution": "class Solution {\n    public:\n    /*\n     * param a: The first integer\n     * param b: The second integer\n     * return: The sum of a and b\n     */\n    int aplusb(int a, int b) {\n        // write your code here, try to do it without arithmetic operators.\n    }\n};\n",
    "main": "int main() {\n    string data;\n    std::getline(std::cin, data);\n    int a = parseInt(data);\n    std::getline(std::cin, data);\n    int b = parseInt(data);\n    Solution solution;\n    std::cout << defaultEncoder(solution.aplusb(a, b)) << std::endl;\n    return 0;\n}\n"
  },
  "python": {
    "solution": "class Solution:\n    \"\"\"\n    @param a: The first integer\n    @param b: The second integer\n    @return: The sum of a and b\n    \"\"\"\n    def aplusb(self, a, b):\n    # \n",
    "main": "import sys\n\na = parseInt(sys.stdin.readline())\nb = parseInt(sys.stdin.readline())\nsolution = Solution()\nprint defaultEncoder(solution.aplusb(a, b))\n"
  },
  "java": {
    "solution": "class Solution {\n    /*\n     * param a: The first integer\n     * param b: The second integer\n     * return: The sum of a and b\n     */\n    public int aplusb(int a, int b) {\n        // write your code here, try to do it without arithmetic operators.\n    }\n};\n",
    "main": "class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = parseInt(scanner.nextLine());\n        int b = parseInt(scanner.nextLine());\n        Solution solution = new Solution();\n        String result = defaultEncoder(solution.aplusb(a, b));\n        System.out.println(result);\n    }\n}\n"
  }
}
```

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
