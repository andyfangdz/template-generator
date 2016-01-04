int main() {
    string data;
    {{#params}}
    std::getline(std::cin, data);
    {{repr}} {{name}} = {{parser}}(data);
    {{/params}}
    Solution solution;
    std::cout << {{return.encoder}}(solution.{{method}}({{#params}}{{name}}{{#unless @last}}, {{/unless}}{{/params}})) << std::endl;
    return 0;
}
