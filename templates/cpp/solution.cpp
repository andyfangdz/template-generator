class Solution {
    public:
    /*
     {{#params}}
     * param {{name}}: {{desc}}
     {{/params}}
     * return: {{return.desc}}
     */
    {{return.repr}}{{method}}({{#params}}{{repr}} {{name}}{{#unless @last}}, {{/unless}}{{/params}}) {
        // {{hint}}
    }
};
