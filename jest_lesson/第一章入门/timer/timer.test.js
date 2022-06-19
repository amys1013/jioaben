import { timerGame } from './index'
jest.useFakeTimers();
test('timer 进行mock进行测试', (done) => {
    const fn = jest.fn();

    timerGame(fn)
    jest.runAllTimers();
    expect(fn).toHaveBeenCalledTimes(1)

    done()

})