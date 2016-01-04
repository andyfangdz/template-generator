import sys

{{#params}}
{{name}} = {{parser}}(sys.stdin.readline())
{{/params}}
solution = Solution()
print {{return.encoder}}(solution.{{method}}({{#params}}{{name}}{{#unless @last}}, {{/unless}}{{/params}}))
