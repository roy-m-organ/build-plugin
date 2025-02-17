// Unless explicitly stated otherwise all files in this repository are licensed under the MIT License.
// This product includes software developed at Datadog (https://www.datadoghq.com/).
// Copyright 2019-Present Datadog, Inc.

describe('Helpers', () => {
    test('It should use the moduleGraph API where availabled', () => {
        const { getModuleName } = require('../helpers');
        const mockModule1 = {
            issuer: {
                userRequest: 'moduleName',
            },
        };
        const mockModule2 = {
            moduleGraph: {
                issuer: {
                    userRequest: 'moduleName',
                },
            },
        };

        expect(getModuleName(mockModule1)).toBe(getModuleName(mockModule2));
    });
    test('It should return the size of a module', () => {
        const { getModuleSize } = require('../helpers');
        const module1 = { size: 1 };
        const module2 = { size: () => 2 };
        expect(getModuleSize(module1)).toBe(1);
        expect(getModuleSize(module2)).toBe(2);
        expect(getModuleSize()).toBe(0);
    });
});
