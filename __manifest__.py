# -*- coding: utf-8 -*-
{
    'name': "Numbers For List View",
    'summary': "Numbers For List Views",
    'description': "Numbers For List Views",
    'author': "Sagar",
    'category': 'Web',
    'version': '1.0',
    'depends': ['base', 'web'],
    'assets': {
        'web.assets_backend': [
            'numbers_for_list/static/src/js/list_numbers.js',
            'numbers_for_list/static/views/list_render.xml',
        ],
    },
    'installable': True,
    'application': False,
}
