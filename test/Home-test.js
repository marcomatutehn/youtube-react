import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Home from '../src/pages/Home';
import {describe} from "mocha";
import {it} from "faker/lib/locales";

describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(shallow(<Home />).contains(<div className="Home" />)).to.equal(true);
    });

    /*

    it("contains spec with an expectation", function() {
        expect(shallow(<Home  />).is('.foo')).to.equal(true);
    });

    it("contains spec with an expectation", function() {
        expect(mount(<Home  />).find('.foo').length).to.equal(1);
    });
    */

});
