export default function tmpl($api, $cmp, $slotset, $ctx) {
    const { d: api_dynamic, t: api_text, h: api_element } = $api;

    return [
        api_element('section', {}, [
            $cmp.isTrue ? api_dynamic($cmp.foo) : null,
            $cmp.isTrue ? api_text(' ') : null,
            $cmp.isTrue ? api_dynamic($cmp.bar) : null
        ])
    ];
}