int main() {
    {{#params}}
    string data;
    std::getline(std::cin, data);
    {{repr}} {{name}} = {{parser}}(data);
    {{/params}}
    Solution solution;
    std::cout << {{retEncoder}}(solution.{{method}}({{#params}}{{name}}{{#unless @last}}, {{/unless}}{{/params}})) << std::endl;
    return 0;
}
