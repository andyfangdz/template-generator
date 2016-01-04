class Solution {
    public:
    /*
     {{#params}}
     * param {{name}}: {{desc}}
     {{/params}}
     * return: {{retdesc}}
     */
    {{rettype}} {{method}}({{#params}}{{repr}} {{name}}{{#unless @last}}, {{/unless}}{{/params}}) {
        // {{hint}}
    }
};
