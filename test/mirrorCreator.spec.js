import { expect }    from 'chai';
import mirrorCreator from '../src/mirrorCreator';

describe('mirrorCreator', () => {

  it('should return an object with values equal to its key names', () => {
    const input  = [ 'ONE', 'TWO', 'THREE' ];
    const output = mirrorCreator(input);

    expect(output.ONE).to.equal('ONE');
    expect(output.TWO).to.equal('TWO');
    expect(output.THREE).to.equal('THREE');
  });


  it('should return an object with values equal to its prefixed key names', () => {
    const input  = [ 'ONE', 'TWO', 'THREE' ];
    const output = mirrorCreator(input, { prefix: 'PREFIX/' });

    expect(output.ONE).to.equal('PREFIX/ONE');
    expect(output.TWO).to.equal('PREFIX/TWO');
    expect(output.THREE).to.equal('PREFIX/THREE');
  });

  it('keyMirror initial feature', () => {
    const input = {
      ten: '',
      hundred: '',
      thousand: '',
    };
    const output = mirrorCreator(input);
    expect(output.ten).to.equal('ten');
    expect(output.hundred).to.equal('hundred');
    expect(output.thousand).to.equal('thousand');
  })

  it('keyMirror initial feature, use symbol', () => {
    const input = {
      ten: '',
      hundred: '',
      thousand: '',
    };
    const output = mirrorCreator(input, { useSymbol: true });
    expect(output.ten).to.equal(Symbol.for('ten'));
    expect(output.hundred).to.equal(Symbol.for('hundred'));
    expect(output.thousand).to.equal(Symbol.for('thousand'));
  })

  it('keyMirror initial feature add prefix, suffix', () => {
    const input = {
      ten: '',
      hundred: '',
      thousand: '',
    };
    const output = mirrorCreator(input, { prefix: 'one ', suffix: ' dollars' });
    expect(output.ten).to.equal('one ten dollars');
    expect(output.hundred).to.equal('one hundred dollars');
    expect(output.thousand).to.equal('one thousand dollars');
  })

  it('first argument is string type', () => {
    const input = 'ten|hundred|thousand';
    const output = mirrorCreator(input);
    expect(output.ten).to.equal('ten');
    expect(output.hundred).to.equal('hundred');
    expect(output.thousand).to.equal('thousand');
  })

  it('first argument is string type, use symbol', () => {
    const input = 'ten|hundred|thousand';
    const output = mirrorCreator(input, { useSymbol: true });
    expect(output.ten).to.equal(Symbol.for('ten'));
    expect(output.hundred).to.equal(Symbol.for('hundred'));
    expect(output.thousand).to.equal(Symbol.for('thousand'));
  })

  it('first argument is string type, add prefix, suffix', () => {
    const input = 'ten|hundred|thousand';
    const output = mirrorCreator(input, { prefix: 'one ', suffix: ' dollars' });
    expect(output.ten).to.equal('one ten dollars');
    expect(output.hundred).to.equal('one hundred dollars');
    expect(output.thousand).to.equal('one thousand dollars');
  })

  it('first argument is string type, no split flag', () => {
    const input = 'noSplitFlag';
    const output = mirrorCreator(input);
    expect(output.noSplitFlag).to.equal('noSplitFlag');
  })

  it('first argument type is wrong, should throw TypeError', () => {
    expect(() => mirrorCreator(233)).to.throw(Error);
  })

});
