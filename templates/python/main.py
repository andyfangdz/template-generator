import sys

{{#params}}
{{name}} = {{parser}}(sys.stdin.readline())
{{/params}}
solution = Solution()
print {{retEncoder}}(solution.{{method}}({{#params}}{{name}}{{#unless @last}}, {{/unless}}{{/params}}))
