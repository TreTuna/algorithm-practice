

describe('Common Characters', function(){
  it('returns common characters', function(){
    expect(commonCharacters('abc', 'abc')).toBe('abc');
  });

  it('returns common characters', function(){
    expect(commonCharacters("What is love?", "Baby don't hurt me")).toBe('hatoe');
  });

  it('returns common characters', function(){
    expect(
      commonCharacters('Riding on a buffalo makes me more approachable', 'so what')
    ).toBe('oash');
  });

  it('returns empty string', function(){
    expect(commonCharacters('', 'No more')).toBe('');
  });

  it('returns empty string', function(){
    expect(commonCharacters('No more', '')).toBe('');
  });

  it('returns empty string', function(){
    expect(commonCharacters('', '')).toBe('')
  });
});